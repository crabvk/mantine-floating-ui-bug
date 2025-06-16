import { Select } from '@mantine/core'
import classes from './styles/main.module.css'

function App() {
  return (
    <div className={classes.content}>
      {[...Array(50).keys()].map((id) => (
        <Select
          key={id}
          label={`Your favorite library ${id}`}
          placeholder={`Pick value ${id}`}
          data={['React', 'Angular', 'Vue', 'Svelte']}
        />
      ))}
    </div>
  )
}

export default App
