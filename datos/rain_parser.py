import csv
import json

class CsvDictReader(object):
    def __init__(self,filename):
        self.raw_path ="raw/"+filename+".csv"
        self.processed_path ="processed/"+filename+".json"

    def run(self):
        with open(self.raw_path) as csvfile:
            reader = csv.DictReader(csvfile)
            print reader
            with open(self.processed_path, 'w') as fp:
                json.dump({"data":list(reader)}, fp)

CsvDictReader("date_rain").run()

