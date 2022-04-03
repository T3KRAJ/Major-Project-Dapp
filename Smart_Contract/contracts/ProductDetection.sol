//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract ProductDetection {
    /*
		holds the address of the owner of the contract
		owner -> the address which deploys this smart contract on the network.
	*/
    address public owner;
    /*
		productId is used to provide a unique ID to every product that is added.
		It increments every time a new product is created.
	*/
    uint256 productId = 0;

    // define all custom structs

    struct Manufacturer {
        bool exists;
        string name;
        string website;
        address wallet_address;
    }

    struct Product {
        bool exists;
        uint256 id;
        string name;
        string model;
        uint256 price;
        address manufacturer;
        address curOwner;
        address[] owners;
    }

    mapping(address => Manufacturer) public manufacturers;
    mapping(uint256 => Product) products;

    event ManufacturerCreated(string name, address _address);
    event ProductCreated(uint256 id, address manufacturer);
    event OwnershipUpdated(uint256 id, address newOwner);

    constructor() {
        owner = msg.sender;
    }

    function createManufacturer(
        string memory _name,
        string memory _website,
        address _address
    ) public {
        require(
            msg.sender == owner,
            "Only owner is authorised to create a manufacturer!"
        );

        Manufacturer storage m = manufacturers[_address];
        m.exists = true;
        m.name = _name;
        m.wallet_address = _address;
        m.website = _website;
        emit ManufacturerCreated(_name, _address);
    }

    function createProduct(
        string memory _name,
        string memory _model,
        uint256 _price
    ) public {
        require(
            manufacturers[msg.sender].exists == true,
            "You are not a Manufacturer!"
        );
        Product storage p = products[productId];
        p.exists = true;
        p.id = productId;
        p.name = _name;
        p.model = _model;
        p.price = _price;
        p.manufacturer = msg.sender;
        p.curOwner = msg.sender;
        // push cur owner(manufacturer) to owners array
        p.owners.push(msg.sender);

        productId++;
        emit ProductCreated(productId - 1, msg.sender);
    }

    function getManufacture(address _address)
        public
        view
        returns (Manufacturer memory)
    {
        return manufacturers[_address];
    }

    function getProduct(uint256 _id) public view returns (Product memory) {
        return products[_id];
    }

    function updateOwnership(uint256 _id, address _newOwner) public {
        Product storage p = products[_id];
        require(p.curOwner == msg.sender, "Not authorized");
        p.curOwner = _newOwner;
        p.owners.push(_newOwner);

        emit OwnershipUpdated(_id, _newOwner);
    }
}
