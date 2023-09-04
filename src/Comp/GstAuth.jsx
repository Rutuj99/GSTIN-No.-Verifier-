
//  API KEY =  a050f8e369448e30cc533ffaf66f844b
// GSTIN N0.= 07AAGFF2194N1Z1


import React, { useState, useRef,useEffect } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react' ;




export default function GstAuth() {


  let [status, setS] = useState(" ");
  let [id, setId] = useState({});
  let [data, setData] = useState();


  

  function handleClick() {

     axios.get(
        `http://sheet.gstincheck.co.in/check/a050f8e369448e30cc533ffaf66f844b/${data}`
      ).then((res) => {
        setId(res.data);
        setS(res.data.flag);
        setId(res.data.data);
      });

      console.log(status);
      console.log(id);
  }



  return (
    <div className="input-elem">
     
      <Input placeholder="Enter GSTIN number" size="lg" w="600px" onChange={(e)=>{
                  setData(e.target.value);
      }}/>
      <Button
        style={{ marginLeft: "10px", marginTop: "-5px" }}
        colorScheme="blue"
        h="51px"
        w="100px"
        onClick={handleClick}
      >
        Button
      </Button>

      
        {

          status==true &&

          <TableContainer className="tableDisplay">
  <Table variant='striped' colorScheme='blue'>
    
    <Thead>
      <Tr>

        <Th>Title</Th>
        <Th>Value</Th>
       
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td> GSTIN No </Td>
        <Td>{id.gstin}</Td>
       
      </Tr>
      <Tr>
        <Td>Tax Payer</Td>
        <Td>{id.dty}</Td>
       
      </Tr>
      <Tr>
        <Td>Registration Date</Td>
        <Td>{id.rgdt}</Td>
      
      </Tr>
      <Tr>
        <Td>Location</Td>
        <Td>{id.stj}</Td>
      
      </Tr>
      <Tr>
      <Td>Status</Td>
      <Td>{id.sts}</Td>
    
    </Tr>
    <Tr>
      <Td>Invoice Status</Td>
      <Td>{id.einvoiceStatus}</Td>
    
    </Tr>
    </Tbody>
   
  </Table>
</TableContainer>
          
        
       }



       { 
           status ?  " " :  <h1 className="invalid-no">Invalid GSTIN number</h1>
       }
      

    



    </div>
  );
}
