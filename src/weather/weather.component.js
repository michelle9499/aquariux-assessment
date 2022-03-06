import 'bootstrap/dist/css/bootstrap.min.css';
import './weather.style.css'
import 'weather-icons/css/weather-icons.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FaSearch } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';


const WeatherComponent = props => {
    function error() {
        return (
            <div className='alert alert-danger' role='alert'>{props.errorMessage}</div>
        );
    }

    return (
        <div className='container'>
            <h2 className='my-4'>Today's Weather</h2>
            <hr />
            <form onSubmit={(e) => props.loadWeather(e, null, null)} className='mb-4'>
                <div className='row'>
                    <div className='col-md-3 mb-sm-2'>
                        <input type="text" className='form-control' placeholder='City' name='city' autoComplete='off' />
                    </div>
                    <div className='col-md-3 mb-sm-2'>
                        <input type="text" className='form-control' placeholder='Country' name='country' autoComplete='off' />
                    </div>
                    <div className='btn-toolbar col-md-6 mb-sm-2'>
                        <Button type='submit' variant='warning' className='btn mx-1 no-outline'>Search</Button>
                        <Button type='reset' variant='outline-secondary' className='btn mx-1 no-outline' defaultValue="Reset">Clear</Button>
                    </div>
                    <div className='col-12'>{props.error ? error() : null}</div>
                </div>
            </form>
            {props.city && props.country ? (
                <Card className={`wbg-${props.icon} mb-4 w-28rem w-sm-100 text-white`}>
                    <Card.Body className='row'>
                        <div className='col-8'>
                            <p className='mb-0'>{props.city}, {props.country}</p>
                            <h1>{props.main}</h1>
                            <p className='mb-0'>Description: {props.description}</p>
                            <p className='mb-0'>Temperature: {props.tempMin}&deg;C ~ {props.tempMax}&deg;C</p>
                            <p className='mb-0'>Humidity: {props.humidity}%</p>
                            <p className='mb-0'>Time: {props.time}</p>
                        </div>
                        <div className='col-4 my-auto text-center'>
                            <p><i className={`wi wi-${props.icon} display-1`} /></p>
                        </div>
                    </Card.Body>
                </Card>
            ) : null}
            <h3>Search History</h3>
            <hr />
            <Table responsive>
                <tbody>
                    {props.recent.map((r, i) => (
                        <tr key={i}>
                            <td width='5%'>{i + 1}.</td>
                            <td width='70%' className='td-block'>{r.city}, {r.country}</td>
                            <td width='10%' className='td-block'>{r.time}</td>
                            <td width='15%'>
                                <Button type='submit' className='btn-rounded-light mx-1' onClick={(e) => props.loadWeather(e, r.city, r.country)}><FaSearch /></Button>
                                <Button type='submit' className='btn-rounded-light mx-1' onClick={() => props.removeHistory(i)}><FaTrashAlt /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {props.recent.length <= 0 ? (<div>Not found</div>) : null}
        </div>
    )
}

export default WeatherComponent;