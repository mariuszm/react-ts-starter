import './App.css';

function App() {
  return (
    <div className="grid">
      <header data-tag-label="<header>" />
      <nav data-tag-label="<nav>" />
      <aside className="sidebar-left" data-tag-label="<aside>" />
      <main data-tag-label="<main>" />
      <aside className="sidebar-right" data-tag-label="<aside>" />
      <footer data-tag-label="<footer>" />
    </div>
  );
}

export default App;
