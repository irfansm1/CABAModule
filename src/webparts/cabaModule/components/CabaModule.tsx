import * as React from 'react';
import styles from './CabaModule.module.scss';
//import { ICabaModuleProps } from './ICabaModuleProps';
import { ICabaModuleProps } from '../../Services/interface/ICabaModuleProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { BrowserRouter as Router, Switch, Route, Routes, Link, HashRouter, match, useParams, Redirect, NavLink } from 'react-router-dom';
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");
import AccommodationDashboards from './Accommodation/AccommodationDasboard';
import AdminGroupDashboards from './AdminGroup/AdminGroupDashboard';
import CabaAdminDashboards from './CABAAdmin/CABAAdminDasboard';
import AdminMaster from './AdminMaster/AdminMaster';
import FlatSpecification from './Master/FlatSpecification';
import FlatTypes from './Master/FlatTypes';
import SocietyName from './Master/SocietyName';
import OccupancyType from './Master/OccupancyType';
import CabaAdminModule from '../../cabaAdminModule/components/CabaAdminModule';

export default class CabaModule extends React.Component < ICabaModuleProps, any > {
  public render(): React.ReactElement<ICabaModuleProps> {
    return(
  <div className = { styles.cabaModule } >

<div>
<HashRouter>
            <div className={styles.borderedpanel}>

              <div className="navbar navbar-expand-sm bg-blue">
                <ul className="navbar-nav">
                 <li className="nav-item" >
                      <NavLink  to="/AccommodationDashboard" activeClassName="active-link">User Accommodation</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink  to="/CabaAdmin" activeClassName="active-link">CABA Admin </NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink  to="/GroupAdminDashboard" activeClassName="active-link">Admin Group</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink  to="/AdminMaster" activeClassName="active-link" >CABA Master</NavLink>
                  </li>
                  

                 </ul>

              </div>
              <div className={'container mb-4'}>
                <Switch>
                   <Route  path="/" exact={true} render={() => <AccommodationDashboards  {...this.props} />} />
                  {/* <Route path="/" exact={true} render={() => <UserTravelDashboards  {...this.props} />} /> */}
                  <Route path="/AccommodationDashboard" exact={true} render={() => <AccommodationDashboards  {...this.props} />} />
                  {/* <Route path="/CabaAdminDashboard" exact={true} render={() => <CabaAdminDashboards  {...this.props} />} /> */}
                  <Route path="/CabaAdmin" exact={true} render={() => <CabaAdminModule  {...this.props} />} />
                  <Route path="/GroupAdminDashboard" exact={true} render={() => <AdminGroupDashboards  {...this.props} />} />
                  <Route path="/AdminMaster" exact={true} render={() => <AdminMaster  {...this.props} />} />
                  
                  <Route path="/FlatSpecificationMaster" exact={true} render={() => <FlatSpecification  {...this.props} />} />         
                  <Route path="/FlatTypes" exact={true} render={() => <FlatTypes  {...this.props} />} />         
                  <Route path="/SocietyName" exact={true} render={() => <SocietyName  {...this.props} />} />         
                  <Route path="/OccupancyType" exact={true} render={() => <OccupancyType  {...this.props} />} />         
                </Switch>
              </div>
            </div>
          </HashRouter>

</div>
     



  {/* <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div> */}

  </div>
    );
  }
}
