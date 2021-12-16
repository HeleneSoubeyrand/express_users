import List from '../components/List'
import Form from '../components/Form'

const Home = () => {
    return (
    <>
        <div
            style={{  
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <List /> 
            <Form />
        </div>
    </>
    )
}

export default Home