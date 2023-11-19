import { serve } from 'https://deno.land/std@0.140.0/http/server.ts'

// https://deno.com/blog/deploy-static-files

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (!import.meta.main) {
  console.error('This is not main')
}

serve(async () => {
  const HTML = await Deno.readFile('./public/gui-prototype.html');
  return new Response(HTML, {
    headers: {
      'content-type': 'text/html',
    }
  })
});