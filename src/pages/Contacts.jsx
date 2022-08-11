import React from "react"
import {
    GridComponent,
    Inject,
    ColumnsDirective,
    ColumnDirective,
    Search,
    Page
} from "@syncfusion/ej2-react-grids"



function Contacts ()
{
    
const employeesData = [
    {
        EmployeeID: 1,
        Name: "Nancy Davolio",
        Title: "Sales Representative",
        HireDate: "01/02/2021",
        Country: "USA",
        ReportsTo: "Carson"
    },
    {
        EmployeeID: 2,
        Name: "Nasimiyu Danai",
        Title: "Marketing Head",
        HireDate: "01/02/2021",
        Country: "USA",
        ReportsTo: "Carson"
    },
    {
        EmployeeID: 3,
        Name: "Iulia Albu",
        Title: "HR",
        HireDate: "01/02/2021",
        Country: "USA",
        ReportsTo: "Carson"
    }
]

const employeesGrid = [
    {
        headerText: "Employee",
        width: "150",
        textAlign: "Center"
    },
    { field: "Name", headerText: "", width: "0", textAlign: "Center" },
    {
        field: "Title",
        headerText: "Designation",
        width: "170",
        textAlign: "Center"
    },
    {
        headerText: "Country",
        width: "120",
        textAlign: "Center"
    },

    {
        field: "HireDate",
        headerText: "Hire Date",
        width: "135",
        format: "yMd",
        textAlign: "Center"
    },

    {
        field: "ReportsTo",
        headerText: "Reports To",
        width: "120",
        textAlign: "Center"
    },
    {
        field: "EmployeeID",
        headerText: "Employee ID",
        width: "125",
        textAlign: "Center"
    }
]

    const toolbarOptions = ["Search"]

    const editing = { allowDeleting: true, allowEditing: true }

    return (
        <div className='bg-black '>
            <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
                <GridComponent
                    dataSource={employeesData}
                    width='auto'
                    allowPaging
                    allowSorting
                    pageSettings={{ pageCount: 5 }}
                    editSettings={editing}
                    toolbar={toolbarOptions}>
                    <ColumnsDirective>
                       
                        {employeesGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />

                        ) ) }
                        
                    </ColumnsDirective>
                    <Inject services={[Search, Page]} />
                </GridComponent>
            </div>
        </div>
    )
}
export default Contacts