import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    
    Typography,
    TablePagination,
    TableFooter
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650
    },
    tableContainer: {
        borderRadius: 15,
        margin: "10px 10px",
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: "bold",
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: "bold",
        fontSize: "0.75rem",
        color: "white",
        backgroundColor: "grey",
        borderRadius: 8,
        padding: "3px 10px",
        display: "inline-block"
    }
}))

let DEVICES = [],
    STATUSES = ["Active", "Pending", "Disconnected"]
for (let i = 0; i < 1; i++) {
    DEVICES[i] = {
        id: "1",
        temp: "50",
        humidity: "100",
        nbInsects: "5",
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

function MTable() {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>
                            Temperature
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                            Humidity
                        </TableCell>

                        <TableCell className={classes.tableHeaderCell}>
                            Nb Insects
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                            Status
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {DEVICES.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                    ).map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.humidity}</TableCell>
                            <TableCell>{row.temp}</TableCell>

                            <TableCell>{row.nbInsects}</TableCell>
                            <TableCell>
                                <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            (row.status === "Active" &&
                                                "green") ||
                                            (row.status === "Pending" &&
                                                "yellow") ||
                                            (row.status === "Disconnected" &&
                                                "red")
                                    }}>
                                    {row.status}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component='div'
                        count={DEVICES.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default MTable
