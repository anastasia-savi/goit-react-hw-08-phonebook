const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
    fontWeight: 500,
    fontSize: 48,
    color: 'white',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contact manager welcome page
      </h1>
    </div>
  );
}
