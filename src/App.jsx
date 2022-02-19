import './App.css';
import React from 'react';
import { Navbar, Container, InputGroup, FormControl, Table } from 'react-bootstrap'
import Data from './components/MOCK_DATA.json'
import Page from './components/Page';
function App() {
  const [txt, setTxt] = React.useState('');
  const itemsPpg = 10;
  const totNOfPages = Math.ceil(Data.length / itemsPpg)
  const [pagination, setPagination] = React.useState(
    {
      start: 0,
      end: itemsPpg,
    }
  )
  const onPageChange = (start, end) => {
    setPagination({ start: start, end: end })
  }
  return (
    <div className="App">
      <Navbar className='mb-2 new-font' >
        <Container>
          <Navbar.Brand href='http://piyush--portfolio.herokuapp.com/' style={{ color: 'whitesmoke' }}>
            Piyush
          </Navbar.Brand>
          <h1 style={{ color: 'whitesmoke', marginInline: 'auto' }}>React Table</h1>
        </Container>
      </Navbar>
      <Container>
        <p className='new-font' style={{ color: 'whitesmoke' }}>This app includes a table that retrieves data from a JSON and maps it to the table, as well as search capability with a pagination mechanism. <br />Click on the upper left corner to see more of my creations.</p>
        <InputGroup className='mb-4' onChange={(e) => (setTxt(e.target.value))} value={txt}>
          <InputGroup.Text>First Name</InputGroup.Text>
          <FormControl as="textarea" aria-label="username" />
        </InputGroup>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.slice(pagination.start, pagination.end)
                .filter((item) => {
                  if (txt === '') {
                    return item
                  }
                  else if (item.first_name.toLowerCase().includes(txt.toLowerCase())) {
                    return item
                  }
                })
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <td >
                        {
                          item.id
                        }
                      </td>
                      <td>
                        {
                          item.first_name
                        }
                      </td>
                      <td>
                        {
                          item.last_name}
                      </td>
                    </tr>
                  )
                })
            }
          </tbody>
        </Table>
        <Page itemsPpg={itemsPpg} onPageChange={onPageChange} totNOfPages={totNOfPages} />
      </Container>
    </div>
  );
}

export default App;
