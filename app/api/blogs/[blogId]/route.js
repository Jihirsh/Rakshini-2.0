import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
// import crypto from "crypto";

async function deleteCloudinaryImage(imageUrl) {
  if (!imageUrl) return;
  const regex = /\/v\d+\/([^\.]+)\.[a-z]{3,4}$/i;
  const match = imageUrl.match(regex);
  const publicId = match && match[1];
  if (!publicId) return;

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`;
  const destroyEndpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

  const formData = new FormData();
  formData.append("public_id", publicId);
  formData.append("api_key", apiKey);
  formData.append("timestamp", Math.floor(Date.now() / 1000));
  // Cloudinary API requires a signature for deletion
  // Here, you should generate a SHA1 signature: sha1(public_id + timestamp + api_secret)
  // For simplicity, use a package like `crypto` (node.js only)
  const crypto = require("crypto");
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha1")
    .update(`public_id=${publicId}&timestamp=${timestamp}${apiSecret}`)
    .digest("hex");
  formData.append("signature", signature);

  const res = await fetch(destroyEndpoint, {
    method: "POST",
    body: formData,
  });
  return await res.json();
}

export async function DELETE(req, { params }) {
  const blogId = params.blogId;
  if (!blogId) {
    return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
  }

  const blog = await prisma.post.findUnique({
    where: { id: blogId },
  });
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  if (blog.img) {
    await deleteCloudinaryImage(blog.img);
  }

  await prisma.post.delete({
    where: { id: blogId },
  });

  return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}
