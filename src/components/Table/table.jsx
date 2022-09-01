import React, { useEffect,useState} from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import "./Table.css"
import axios from "axios"
import { getUserID, getToken } from "../../api/Shared_api"


const makeStyle = status => {
    if (status === "Active") {
        return {
            background: "rgb(145 254 159 / 47%)",
            color: "green"
        }
    } else if (status === "Pending") {
        return {
            background: "#ffadad8f",
            color: "red"
        }
    } else {
        return {
            background: "#59bfff",
            color: "white"
        }
    }
}

export default function BasicTable ()
{
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchUserDevices = async () =>
        {
            {
                const userId = getUserID()
                const token = getToken()
                axios( {
                    url: `http://iqfarm.herokuapp.com/devices/user/${userId}`,
                    method: "get",
                    headers: {
                        "x-access-token": token
                    }
                } )
                    .then( response =>
                    {
                        console.log( response )
                        setData(response["data"])

                    } )
                    .catch( err =>
                    {
                        console.log( err )
                    } )
            }
        }
        fetchUserDevices()
    }, [] )

   
    
    
        if ( data === null ) return "Loading..."

    return (
        <div className='Table'>
            <h3>My devices</h3>
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Device ID</TableCell>
                            <TableCell align='left'>Temperature</TableCell>
                            <TableCell align='left'>Humidity</TableCell>
                            <TableCell align='left'>NB insects</TableCell>
                            <TableCell align='left'>Status</TableCell>
                            <TableCell align='left'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {data.map(data => (
                            <TableRow
                                key={data._id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0
                                    }
                                }}>
                                <TableCell component='th' scope='row'>
                                    {data._id}
                                </TableCell>

                                <TableCell align='left'>{data.temp}</TableCell>
                                <TableCell align='left'>{data.hum}</TableCell>
                                <TableCell align='left'>
                                    {data.numInsects}
                                </TableCell>

                                {/* <TableCell align='left'>
                                    <span
                                        className='status'
                                        style={(row.status)}>
                                        {row.status}
                                    </span>
                                </TableCell> */}

                                <TableCell align='left' className='Details'>
                                    Details
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
