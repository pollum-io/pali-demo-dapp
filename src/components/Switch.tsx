import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

export const SwitchToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="relative inline-flex items-center h-5 rounded-full w-8 border border-brand-royalblue"
    >
      <span
        className={`${
          enabled
            ? 'translate-x-4 bg-warning-success'
            : 'translate-x-1 bg-warning-error'
        } inline-block w-3 h-3 transform rounded-full`}
      />
    </Switch>
  );
};
