import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

  const response = await fetch(cloudinaryUrl, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.secure_url) {
    return NextResponse.json({ url: result.secure_url });
  } else {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }
};