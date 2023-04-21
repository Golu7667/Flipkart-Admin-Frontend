
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./sidebar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {BiCategory} from 'react-icons/bi'
import {GrProductHunt} from 'react-icons/gr'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'


const Sidebar=(props)=> {
  return (
    <Container fluid  >
    <Row>
        <Col md={2} className="sidebar">
            <ul>
                <li><NavLink to={'/'}><div className='sidebarcontain'><div className='sidebaricon'><AiOutlineHome  /></div> <div className='sidebarname'>Home</div></div> </NavLink></li>
                <li><NavLink to={'/category'}><div className='sidebarcontain'><div className='sidebaricon'><BiCategory /></div> <div className='sidebarname'>Category</div></div>   </NavLink></li>
                <li><NavLink to={'/products'}><div className='sidebarcontain'><div className='sidebaricon'><GrProductHunt/> </div> <div className='sidebarname'>Products</div></div>      </NavLink></li>
                <li><NavLink to={'/orders'}> <div className='sidebarcontain'><div className='sidebaricon'><BsFillCartCheckFill  /></div> <div className='sidebarname'>Orders</div></div> </NavLink></li>
                <li><NavLink to={'/profile'}> <div className='sidebarcontain'><div className='sidebaricon'><CgProfile /></div> <div className='sidebarname'>Profile</div></div> </NavLink></li>
            </ul>
        </Col>
        <Col md={10} style={{width:'80%'}}>{props.name}</Col>
      </Row>
    </Container> 
  )
}

export default Sidebar


// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem
 
// } from 'cdbreact';
// import { FaHome } from 'react-icons/fa'

// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink  to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink to={'/category'} activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user" >   Category</CDBSidebarMenuItem>
             
//             </NavLink>
//             <NavLink  to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Products</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink  to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Orders</CDBSidebarMenuItem>
//             </NavLink>
//             <div  to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">signout</CDBSidebarMenuItem>
//             </div>
           
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//               fontSize:15,
//               color:"red"
//             }}
//           >
//            Admin Dashboard
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;