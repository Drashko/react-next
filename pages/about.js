export default function AboutPage() {
  return (
    <section>
      <h2>About</h2>
      <p>
        This project demonstrates basic navigation between pages and API routes.
      </p>
      <p>
        To test MariaDB connectivity, call <code>/api/db-health</code> after setting your
        <code> MARIADB_*</code> environment variables.
      </p>
    </section>
  );
}
