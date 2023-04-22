// SPDX-License-Identifier: MIT

pragma solidity  >=0.4.22;



// Define a contract 'Supplychain'
contract SupplyChain
   
{
    
    // olive_upc -> oliveItem
    mapping(address => LandPlot) landPlots;

    // olive_upc -> oliveItem
    mapping(address => OliveItem) oliveItems;
   
    // oil_upc -> olive_upc[]
    mapping(uint256 => uint256[]) oilolives;

    // Define enum 'State' with the following values:
    enum OliveState {
        Planted,
        Harvested,
        produced,
        Audited,
        Processed
    }
    OliveState constant defaultOliveState = OliveState.Planted;

    // Define a struct 'oliveItem' with the following fields:
    struct LandPlot {
        address id_land;
        string geo_loc;
        string sail_typ; 
        uint alt; 
        uint nb_tree; 
        uint id_farmer;
    }
    // Define a struct 'oliveItem' with the following fields:
    struct OliveItem {
        address oliveID;
        address ownerID; // Metamask-Ethereum address of the current owner as the product moves through stages
        uint landID; // Metamask-Ethereum address of the Farmer
        string numberTree; // number Tree
        string oliveVariety; // olive Variety
        string plantingDate; // planting Date
        OliveState itemState; // Product State as represented in the enum above
    }

   

    // Define events of olives
    event LandCreated(address _idLand);
    event OlivePlanted(address _oliveID);
    event OliveHarvested(address _oliveID);
    event OliveProduced(address _oliveID);

   

    
    // Define a modifier that checks if an oliveItem.state of a upc is Planted
    modifier isPlanted(address _oliveID) {
        require(
            oliveItems[_oliveID].itemState == OliveState.Planted,
            "not Planted"
        );
        _;
    }

    // Define a modifier that checks if an oliveItem.state of a upc is Harvested
    modifier isHarvested(address _oliveID) {
        require(
            oliveItems[_oliveID].itemState == OliveState.Harvested,
            "not Harvested"
        );
        _;
    }

   

 

    function addLand( 
        string memory _geoLoc,
        string memory _sailTyp,
        uint256 _alt,
        uint256 _nbTree,
        uint _originFarmerID
    ) public {
        address _LandID = address(uint160(uint(keccak256(abi.encodePacked(msg.sender, block.number))))); // generate a new unique Ethereum address
        // Add the new item as part of Harvest
        LandPlot memory newLandPlot = LandPlot({
            id_land : _LandID,
            geo_loc : _geoLoc,
            sail_typ : _sailTyp,
            alt : _alt,
            nb_tree : _nbTree,
            id_farmer : _originFarmerID
            });

        landPlots[_LandID] = newLandPlot;
        
    
        // Emit the appropriate event
        emit LandCreated(_LandID);
    }
    // Transfer Eth to owner and terminate contract
   
    // Define a function 'olivePlantItem' that allows a farmer to mark an item 'Planted'
    function olivePlantItem(
        address ownerID,
        uint landID, 
        string memory numberTree,
        string memory oliveVariety,
        string memory plantingDate

        
    ) public {
        address _oliveID = address(uint160(uint(keccak256(abi.encodePacked(msg.sender, block.number))))); // generate a new unique Ethereum address

        OliveItem memory newOliveItem = OliveItem({
            oliveID:_oliveID,
            ownerID : ownerID,
            landID : landID,
            numberTree : numberTree,
            oliveVariety :oliveVariety,
            plantingDate : plantingDate,
            itemState : OliveState.Planted
            });

        oliveItems[_oliveID] = newOliveItem;
        
        emit OlivePlanted(_oliveID);
    }

    // Define a function 'oliveHarvestItem' that allows a farmer to mark an item 'Harvested'
    function oliveHarvestItem(
        address _oliveID

    ) public  isPlanted(_oliveID) {
        // Add the new item as part of Harvest
        oliveItems[_oliveID].ownerID = msg.sender;
        
        // Update state
        oliveItems[_oliveID].itemState = OliveState.Harvested;
        // Emit the appropriate event
        emit OliveHarvested(_oliveID);
    }
    function oliveProducetItem(
        address _oliveID

    ) public  isHarvested(_oliveID) {
         // Add the new item as part of Harvest
        oliveItems[_oliveID].ownerID = msg.sender;
        
        // Update state
        oliveItems[_oliveID].itemState = OliveState.produced;
        // Emit the appropriate event
        emit OliveProduced(_oliveID);
    }
    

}
/*
pragma solidity pragma solidity >=0.4.22 <0.9.0;


contract Supplychain{

    // Variable for Stock keeping Unit (SKU) named 'sku'
//-------------------------------------------

    //MAPPING:
    // Olive_upc -> OliveItem
    //Oil_upc -> OilItem
    //Oil_upc -> olive_upc[]
//-------------------------------------------

    //Olive States{planted, harvested, audited, processed}
    
    // Oil States{Created,Blended,Produced,Certified,Packed,ForSale,Purchased}
    //Etat par defaut: Created
//-------------------------------------------

    //struct Olive Item
    //struct Oil Item
//-------------------------------------------
    // for each enum create an event:

    // event OlivePlanted
    // event OliveHarvested
    // event OliveAudited
    // event OliveProcessed
    
    //event OilCreated
    //event OilBlended
    //event OilProduced
    //event OilPacked
    //event OilCertified
    //event OilForSale
    //event OilPurshased

//-------------------------------------------

    // modifiers:

    //modifer that verifies the Caller
    //modifier that checks if the paid amount is sufficient to cover the price
    // modifier that checks the price and refunds the remaining balance
    // modifier that checks if an OliveItem.state of a upc is Planted
    // modifier that checks if an OliveItem.state of a upc is Harvested
    // modifier that checks if an OliveItem.state of a upc is Audited
    // modifier that checks if an OliveItem.state of a upc is Processed
    // modifier that checks if an OilItem.state of a upc is Created
    // modifier that checks if an OilItem.state of a upc is Blended
    // modifier that checks if an OilItem.state of a upc is Produced
    // modifier that checks if an OilItem.state of a upc is Packed
    // modifier that checks if an OilItem.state of a upc is Certified
    // modifier that checks if an OilItem.state of a upc is ForSale
    // modifier that checks if an OilItem.state of a upc is Purchased
//-------------------------------------------
    //Constructor to initiate the value of sku to 1
//-------------------------------------------


    // function 'OlivePlantItem' that allows a farmer to mark an item 'Planted'
    // function 'grapeHarvestItem' that allows a farmer to mark an item 'Harvested'
    // function 'grapeAuditItem' that allows a Inspector to mark an item 'Audited'
    // function 'grapeProcessItem' that allows a farmer to mark an item 'Processed'
    // function OilCreateItem()
    // function OilBlendItem()
    // function OilProduceItem()
    // function OilCertifyItem()
    // function OilPackItem()
    // function OilSellItem()
    // function OilBuyItem
    // Functions to fetch data:
        // fetchOilItem
        // fetchOliveItem
        // fetchOliveState
}
*/
