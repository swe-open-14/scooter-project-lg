```mermaid
classDiagram
  class Scooter
    Scooter : +String station
    Scooter : +obj user
    Scooter : +Number serial
    Scooter : -Number nextSerial
    Scooter : +Number charge
    Scooter : +Boolean isBroken
    Scooter : +String station

    Scooter : +rent()
    Scooter : +dock(station)
    Scooter : +recharge()
    Scooter : +requestRepair()
    
```