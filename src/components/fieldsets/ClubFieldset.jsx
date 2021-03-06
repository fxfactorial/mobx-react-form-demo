import React from 'react';
import { observer } from 'mobx-react';

import FieldControl from '../controls/FieldControls';
import MaterialTextField from '../inputs/MaterialTextField';

export default observer(({ club }) => (
  <fieldset className="center">

    <MaterialTextField field={club.$('name')} />
    <MaterialTextField field={club.$('city')} />

    <br />
    <br />

    <div>
      <FieldControl
        field={club}
        labels={false}
        controls={{
          onSubmit: true,
          onClear: true,
          onReset: true,
        }}
      />
    </div>

  </fieldset>
));
