import json
import numpy as np

__PROD_CD = None
__SLSMAN_CD = None
__columns = None


def load_saved_artifacts():
    global __PROD_CD
    global __SLSMAN_CD
    global __columns
    with open("./artifacts/columns.json", "r") as f:
        __columns = json.load(f)['data_columns']
    with open("./artifacts/SLSMAN_CD.json", 'r+') as f:
        __SLSMAN_CD = json.load(f)['SLSMAN_CD']
    with open("./artifacts/PROD_CD.json", "r+") as f:
        __PROD_CD = json.load(f)['PROD_CD']
    

def get_columns():
    print("loaded columns")
    load_saved_artifacts()
    return __columns


def get_SLSMAN_CD():
    load_saved_artifacts()
    return __SLSMAN_CD


def get_PROD_CD():
    load_saved_artifacts()
    return __PROD_CD


if __name__ == '__main__':
    print("util is working!!")
    pass
