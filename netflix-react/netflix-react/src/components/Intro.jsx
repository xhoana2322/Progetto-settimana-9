import React from 'react';
import { Dropdown } from 'react-bootstrap';


export default function Intro() {
  return (
    <>
    <div className="d-flex justify-content-between">
        <div className="d-flex">
            <h2 className="mb-4 me-3 text-white">TV Shows</h2>
                <div className="dropdown ml-4 mt-1">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style= {{ backgroundColor: "#221f1f" }} className='border-secondary rounded-0 p-1 px-2'>
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
        </div>
        <div>

        </div>
    </div>

    </>
  )
}
