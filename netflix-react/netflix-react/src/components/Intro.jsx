import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { GridFill, Grid3x3GapFill } from 'react-bootstrap-icons';


export default function Intro() {
  return (
    <>

    <div className="d-flex justify-content-between mt-2">
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
        <GridFill className='text-white fs-4' />
        <Grid3x3GapFill className="text-white mx-5 fs-4" />
    </div>

    </div>

   

    </>
  )
}
