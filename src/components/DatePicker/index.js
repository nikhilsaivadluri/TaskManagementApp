import * as React from 'react';
import dayjs from 'dayjs';
//import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({dateValue,onDateChange, label,format,disabled,disablePast}) {
  //const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
        <DatePicker
          disabled={disabled}
          disablePast={disablePast}
          format={format}
          label={label}
          value={dayjs(dateValue)}
          onChange={(newValue) => onDateChange(dayjs(newValue))}
        />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}