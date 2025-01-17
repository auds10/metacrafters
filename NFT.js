// Step 1: Create a variable to hold your NFTs
let nfts = []; // Using an array to hold multiple NFT objects

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, creator, price, currency) {
    // Create an NFT object
    const nft = {
        name: name,
        creator: creator,
        price: price,
        currency: currency,
    };

    // Store the NFT in the array
    nfts.push(nft);
}

// Step 3: Create a loop that will go through an array of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Creator: " + nft.creator);
        console.log("Price: " + nft.price);
        console.log("Currency: " + nft.currency);
    });
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length; // Return the count of NFTs
}

// Call your functions below this line
mintNFT("Bored Ape Yatch Club", "Daniel Alegre.", 100, "BTC");
mintNFT("Crypto Punks", "Larva Labs", 10, "BTC");
mintNFT("HOME", "BEEPLE", 11, "BTC");

// List all NFTs
listNFTs();

// Get the total supply of NFTs and print it
console.log("Total Supply: " + getTotalSupply());
