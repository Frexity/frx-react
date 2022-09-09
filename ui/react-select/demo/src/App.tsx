import './styles.css'

import { customComponents } from './themes/customSelectComponents'
import { dummyComponents } from './themes/dummyComponents'
import { Select } from './Select'
// import { AsyncSelect } from './Select/Async'

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

export default function App() {
  return (
    <div className="p-2">
      <h2 className="text-2xl">Dummy components</h2>
      <div className="cards">
        <div className="card">
          <h3>Basic</h3>
          <Select options={options} components={dummyComponents} />
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
        <div className="card">
          <h3>Basic with value formatting</h3>
          <Select
            options={options}
            components={dummyComponents}
            selectedValueFormatter={(value) => {
              return `This is value: ${value}`
            }}
          />
        </div>
      </div>

      <h2 className="text-2xl">Custom styled components</h2>
      <div className="cards">
        <div className="card">
          <h3>Basic with multiple values</h3>
          <Select options={options} components={customComponents} canSelectMultipleValues />
        </div>
        <div className="card">
          <h3>Basic with custom components</h3>
          <Select options={options} components={customComponents} />
        </div>
        <div className="card">
          <h3>Basic with multiple values and value formatting</h3>
          <Select
            options={options}
            components={customComponents}
            canSelectMultipleValues
            selectedValueFormatter={(value) => {
              return `This is value: ${value}`
            }}
          />
        </div>
      </div>

      {/* <h2 className="text-2xl">Async versions</h2> */}
      <div className="cards">
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

      <h2 className="text-2xl">Autocomplete</h2>
      <div className="cards">
        <div className="card">
          <h3>Basic</h3>
          <Select options={options} components={dummyComponents} autocomplete />
        </div>
        <div className="card">
          <h3>Custom searchStrategy</h3>
          <Select
            options={options}
            components={dummyComponents}
            autocomplete
            searchStrategy={(option, searchTerm) => {
              return (
                option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                option.value.toLowerCase().includes(searchTerm.toLowerCase())
              )
            }}
          />
        </div>
      </div>

      <h2 className="text-2xl">TODO:</h2>
      <ul>
        <li>- Scroll into view when using arrow keys (and maxHeight)</li>
        <li>- Wrap around using arrow keys</li>
        <li>- autocomplete with async, with cache</li>
        <li>- Reposition on window scroll</li>
        <li>- Dropdown same width as control?</li>
        <li>- Missing placeholder component</li>
        <li>- Set isFocused on context, so you can style control outside of the input focus</li>
        <li>- Width should be calculated on inner control</li>
      </ul>
    </div>
  )
}
