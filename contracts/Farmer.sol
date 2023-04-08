// SPDX-License-Identifier: MIT
pragma solidity  >=0.4.22;

contract Farmer {
    
    struct Farm {
        string geo_loc;   // geographical location of the farm
        string sail_typ;  // type of crop or produce grown on the farm
        uint nb_tree;     // number of trees on the farm
        uint id_farmer;   // unique identifier of the farmer who owns the farm
    }
    
    Farm[] public farms;   // array to store all farms
    
    function addFarm(string memory _geo_loc, string memory _sail_typ, uint _nb_tree, uint _id_farmer) public {
        Farm memory newFarm = Farm(_geo_loc, _sail_typ, _nb_tree, _id_farmer);
        farms.push(newFarm);
    }
    
    function getFarm(uint index) public view returns (string memory, string memory, uint, uint) {
        return (farms[index].geo_loc, farms[index].sail_typ, farms[index].nb_tree, farms[index].id_farmer);
    }
    
    function getFarmCount() public view returns (uint) {
        return farms.length;
    }
    
}