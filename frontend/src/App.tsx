import { tss } from 'tss-react/mui'

const useStyles = tss.create(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <p>Welcome to the Student Loan Calculator!</p>
    </div>
  )
}

export default App
