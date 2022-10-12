// Pure
export default async function readFile(file) {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  const result = await new Promise((resolve) => {
    reader.onload = (event) => {
      if (!event.target?.result) return;

      const target = event.target.result;

      return resolve(target);
    };
  });

  return result;
}
