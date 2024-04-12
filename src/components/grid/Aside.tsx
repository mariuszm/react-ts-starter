type TAside = {
  variant: 'left' | 'right';
};

export default function Aside({ variant }: TAside) {
  return (
    <aside
      className={`bg-grid-aside sidebar-${variant}`}
      data-tag-label="<aside>"
    />
  );
}
