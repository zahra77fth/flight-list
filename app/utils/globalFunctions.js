import moment from 'moment';
import 'moment-jalaali';
import data from '../api/flight-data.json';

export function toPersianDate(gregorianDate: Date): string {
  const jalaliDate = moment(gregorianDate).format('jYYYY/jMMMM/jDD'); // Convert to Persian (Jalali)
  return jalaliDate;
}

export function toPersianDateExpanded(date: string): string {
  const formattedDate = moment(date, 'YYYY-MM-DDTHH:mm:ss').locale('fa').format('jDD jMMMM jYYYY'); 
  return formattedDate;
}

let iata = new Map();
for(let item of data.additionalData.airports){
    iata.set(item.iata,{
    name: item.name,
    nameFa: item.nameFa,
    cityFa: item.cityFa,
    cityId: item.cityId})
}

interface iata{
  name: string;
  nameFa: string;
  cityFa: string;
  cityId: string}

export function iataConvertor(name: string): iata {
  const iataAttribute = iata.get(name);
  return iataAttribute;
}

let airline = new Map();
for(let item of data.additionalData.airlines){
  airline.set(item.iata,{
    name: item.name,
    nameFa: item.nameFa})
}

interface iataAirline {
  name: string;
  nameFa: string;}

export function airlineIataConvertor(name: string): iataAirline {
  const iataAttribute = airline.get(name);
  return iataAttribute;
}


export function getTime(date: string): string {
  const inputDate = new Date(date);
  const hour = ("0" + inputDate.getHours()).slice(-2);
  const minutes = ("0" + inputDate.getMinutes()).slice(-2);
  const formattedHour = `${hour}:${minutes}`;
  return formattedHour;
}

export function readableNumber(number: number): string {
  const readableNumber = number.toLocaleString();
  return readableNumber;
}

export function getPersianTime(inputTime: string): string {
  const [hours, minutes] = inputTime.split(':');
  const formattedTime = `${parseInt(hours, 10)} ساعت و ${parseInt(minutes, 10)} دقیقه`;
  return formattedTime;
}

