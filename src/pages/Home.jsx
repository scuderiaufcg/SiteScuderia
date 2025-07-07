export default function Home() {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-4 py-8 space-y-4">
      <h2 className="text-3xl font-semibold">Bem-vindo à Scuderia UFCG</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      {/* Exemplo de conteudo pra testar scroll */}
      {[...Array(20)].map((_, i) => (
        <p key={i}>Place holder {i + 1}</p>
      ))}
    </main>
  );
}
