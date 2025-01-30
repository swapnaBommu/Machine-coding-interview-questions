
// Construct a MongoDB query to perform a join between two collections,
// Customers and Orders.

// Collection: Customers

// {"_id": ObjectId("1"), "name": "John Doe", "email": "john@example.com"}

// Collection: Orders {"_id": ObjectId("a"), "product": "Laptop", "customerld": Objectid("1")}

db.orders.aggregate([
    {
        $lookup: {
            from: "customers",             // The target collection to join
            localField: "customerId",      // The field from the orders collection
            foreignField: "_id",           // The field from the customers collection
            as: "customerDetails"          // The name for the array to store matching documents
        }
    }
]);
/*Example:
customers collection
{"_id": ObjectId("1"), "name": "John Doe", "email": "john@example.com"}
orders collection
{"_id": ObjectId("a"), "product": "Laptop", "customerId": ObjectId("1")}

The result of this aggregation will look like this:
[
    {
        "_id": ObjectId("a"),
        "product": "Laptop",
        "customerId": ObjectId("1"),
        "customerDetails": [
            {
                "_id": ObjectId("1"),
                "name": "John Doe",
                "email": "john@example.com"
            }
        ]
    }
]

*/

