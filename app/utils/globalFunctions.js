import moment from 'moment';
import 'moment-jalaali';
import data from '../api/flight-data.json';

// Convert Gregorian date to Persian (Jalali) date
export function toPersianDate(gregorianDate) {
  const jalaliDate = moment(gregorianDate).format('jYYYY/jMMMM/jDD'); // Convert to Persian (Jalali)
  return jalaliDate;
}

// Convert ISO 8601 date string to Persian (Jalali) date with expanded format
export function toPersianDateExpanded(date) {
  const formattedDate = moment(date, 'YYYY-MM-DDTHH:mm:ss').locale('fa').format('jDD jMMMM jYYYY');
  return formattedDate;
}

// Initialize Map for airport data
const iata = new Map();
for (let item of data.additionalData.airports) {
  iata.set(item.iata, {
    name: item.name,
    nameFa: item.nameFa,
    cityFa: item.cityFa,
    cityId: item.cityId
  });
}

// Convert IATA code to airport attributes
export function iataConvertor(name) {
  const iataAttribute = iata.get(name);
  return iataAttribute;
}

// Initialize Map for airline data
const airline = new Map();
for (let item of data.additionalData.airlines) {
  airline.set(item.iata, {
    name: item.name,
    nameFa: item.nameFa
  });
}

// Convert IATA code to airline attributes
export function airlineIataConvertor(name) {
  const iataAttribute = airline.get(name);
  return iataAttribute;
}

// Get time from a date string in HH:MM format
export function getTime(date) {
  const inputDate = new Date(date);
  const hour = ("0" + inputDate.getHours()).slice(-2);
  const minutes = ("0" + inputDate.getMinutes()).slice(-2);
  const formattedHour = `${hour}:${minutes}`;
  return formattedHour;
}

// Convert number to a readable string with thousand separators
export function readableNumber(number) {
  const readableNumber = number.toLocaleString();
  return readableNumber;
}

// Convert time string (HH:MM) to Persian time format
export function getPersianTime(inputTime) {
  const [hours, minutes] = inputTime.split(':');
  const formattedTime = `${parseInt(hours, 10)} ساعت و ${parseInt(minutes, 10)} دقیقه`;
  return formattedTime;
}
