import { Container, Dropdown, FormControl, Navbar, Nav, Badge} from "react-bootstrap";
import {BsCartCheck} from 'react-icons/bs';
import {Link} from "react-router-dom";


function Header() {
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to ="/">Cattulu!</Link>

                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder='Vidi chiddu chi ta ggiua'
                        className="m-auto" />
                </Navbar.Text>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            <BsCartCheck color="white" fontSize="25px" />
                            <Badge>{10}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}>carrellu vacanti!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}
 
export default Header; 