import csv
import json

class CsvDictReader(object):
    def __init__(self,filename,delimiter):
        self.delimiter = delimiter
        self.raw_path ="raw/"+filename+".csv"
        self.processed_path ="processed/"+filename+".json"

    def run(self):
        print "Procesado {0}, a {1}".format(self.raw_path,self.processed_path)
        with open(self.raw_path) as csvfile:
            reader = csv.DictReader(csvfile,delimiter=self.delimiter)
            with open(self.processed_path, 'w') as fp:
                json.dump({"data":list(reader)}, fp)

CsvDictReader("date_rain",";").run()
CsvDictReader("tiempo_dia_sexo",",").run()
CsvDictReader("tiempo_dia_total",",").run()
