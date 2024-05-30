import * as React from 'react';
import styles from './SpfxCabaUserModule.module.scss';
import { ISpfxCabaUserModuleProps } from './ISpfxCabaUserModuleProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxCabaUserModule extends React.Component < ISpfxCabaUserModuleProps, {} > {
  public render(): React.ReactElement<ISpfxCabaUserModuleProps> {
    return(
      <div className = { styles.spfxCabaUserModule } >
  <div className={styles.container}>
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
  </div>
      </div >
    );
  }
}
