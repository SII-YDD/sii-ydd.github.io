import publications from '../data/publications.bib?raw';
export function GET() {
  return new Response(publications, {
    headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' },
  });
}
