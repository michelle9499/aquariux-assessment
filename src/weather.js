import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FaSearch } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

export default function Weather() {
    return (
        <div className='container'>
            <h1 className='my-4'>Today's Weather</h1>
            <hr/>
            <div className='row'>
                <div className='col-3'>
                    City: <input type="text"/>
                </div>
                <div className='col-3'>
                    Country: <input type="text"/>
                </div>
                <div className='btn-toolbar col-4'>
                    <Button type='submit' variant='primary' className='btn mx-1'>Search</Button>
                    <Button type='reset' variant='outline-secondary' className='btn mx-1'>Clear</Button>
                </div>
                
            </div>
            <Card className='my-4' style={{ width: '18rem' }}>
                <Card.Body>
                    <p className='text-secondary mb-0'>Johor, MY</p>
                    <h2>Clouds</h2>
                    <p className='text-secondary mb-0'>Description: <span className='text-dark'>xxx</span></p>
                    <p className='text-secondary mb-0'>Temperature: <span className='text-dark'>xxx</span></p>
                    <p className='text-secondary mb-0'>Humidity: <span className='text-dark'>xxx</span></p>
                    <p className='text-secondary mb-0'>Time: <span className='text-dark'>xxx</span></p>
                </Card.Body>
            </Card>
            <div>
                <h3>Search History</h3>
                <hr/>
                <Table responsive>
                    <tbody>
                        <tr>
                            <td width='20px'>1.</td>
                            <td>Johor, MY</td>
                            <td>03:15:02PM</td>
                            <td><Button type='submit' className='mx-1'><FaSearch/></Button><Button type='submit' className='mx-1'><FaTrashAlt/></Button></td>
                        </tr>
                        <tr>
                            <td width='20px'>1.</td>
                            <td>Johor, MY</td>
                            <td>03:15:02PM</td>
                            <td><FaSearch className='mx-1'/><FaTrashAlt className='mx-1'/></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}