import '@/styles/main.scss';

function App() {
  return (
    <div className="grid">
      <header className="bg-grid-default" data-tag-label="<header>" />
      <nav className="bg-grid-nav" data-tag-label="<nav>" />
      <aside className="bg-grid-aside sidebar-left" data-tag-label="<aside>" />
      <main className="bg-grid-main" data-tag-label="<main>" />
      <aside className="bg-grid-aside sidebar-right" data-tag-label="<aside>" />
      <footer className="bg-grid-default" data-tag-label="<footer>" />
    </div>
  );
}

export default App;
