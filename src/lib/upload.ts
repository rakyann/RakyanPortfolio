import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function uploadFile(file: File | null): Promise<string | null> {
  if (!file || file.size === 0) return null;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
  const uploadDir = join(process.cwd(), 'public', 'uploads');
  
  try {
    await mkdir(uploadDir, { recursive: true });
  } catch (err) {
    // Ignore if directory already exists
  }
  
  const filepath = join(uploadDir, filename);
  await writeFile(filepath, buffer);
  
  return `/uploads/${filename}`;
}
