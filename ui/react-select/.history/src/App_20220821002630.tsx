import './styles.css'

import { ClearIndicator } from './CustomSelectComponents/ClearIndicator'
import { Control } from './CustomSelectComponents/Control'
import { ListLoadingIndicator } from './CustomSelectComponents/ListLoadingIndicator'
import { Option } from './CustomSelectComponents/Option'
import { dummyComponents } from './dummy-components'
import { Select } from './Select'
import { AsyncSelect } from './Select/Async'

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
  { label: 'Option 6', value: '6' },
  { label: 'Option 7', value: '7' },
  { label: 'Option 8', value: '8' },
  { label: 'Option 9', value: '9' },
  { label: 'Option 10', value: '10' },
]

const customComponents = {
  Option,
  Control,
  ClearIndicator,
  ListLoadingIndicator,
}

export default function App() {
  return (
    <div className="cards">
      <div className="card">
        <h3>Basic</h3>
        <Select options={options} components={dummyComponents} />
      </div>
      <div className="card">
        <h3>Basic with custom components</h3>
        <Select options={options} components={customComponents} />
      </div>
      <div className="card">
        <h3>Basic with value formatting</h3>
        <Select
          options={options}
          components={dummyComponents}
          valueFormatter={(value) => {
            return value ? `This is value: ${value}` : null
          }}
        />
      </div>
      <div className="card">
        <h3>Basic with multiple values</h3>
        <Select options={options} components={customComponents} canSelectMultipleValues />
      </div>
      {/* <div className="card">
        <h3>TODO: Basic with initial value</h3>
        <Select options={options} components={customComponents} canSelectMultipleValues />
      </div> */}
      <div className="card">
        <h3>Basic with max height list</h3>
        <Select
          options={options}
          components={dummyComponents}
          optionsListProps={{
            maxHeight: 150,
          }}
        />
      </div>
      {/* <div className="card">
        <h3>Async</h3>
        <AsyncSelect
          options={options}
          components={dummyComponents}
          asyncOptions={{
            url: 'https://jsonplaceholder.typicode.com/albums',
            startPage: 0,
            perPage: 4,
            queryAttribute: 'page',
            labelAttribute: 'title',
            valueAttribute: 'id',
            loadOnMount: true,
          }}
        />
      </div> */}
      {/* <div className="card">
        <h3>TODO: Async with initial value</h3>
        <AsyncSelect
          options={options}
          components={dummyComponents}
          asyncOptions={{
            url: 'https://jsonplaceholder.typicode.com/albums',
            startPage: 0,
            perPage: 4,
            queryAttribute: 'page',
            labelAttribute: 'title',
            valueAttribute: 'id',
            loadOnMount: true,
          }}
        />
      </div> */}
    </div>
  )
}
