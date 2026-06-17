export async function fetchProducts() {
  try {
    const response = await fetch('https://pranavstore.deno.dev/');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error.message);
    return null;
    // Return null on error
  }
}