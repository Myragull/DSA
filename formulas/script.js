// A. Flat Rate Pattern
// This is simple: all units are charged at the same rate.
// Formula:
// Bill = Units * Rate per unit
// Example:
// Units = 185
// Flat rate = 10 PKR per unit
// Bill = 185 * 10 = 1850 PKR
// B. Piecewise (Slab) Rate Pattern
// Here, different portions of units fall into different rate ranges (slabs).
// Example Slab Rates:
// First 100 units → 5 PKR/unit
// Next 100 units → 8 PKR/unit
// Above 200 units → 12 PKR/unit
// Example Calculation (Units = 185):
// First 100 units: 100 * 5 = 500
// Remaining 85 units (since total is 185): 85 * 8 = 680
// Total bill = 500 + 680 = 1180 PKR


// discount calculations:
// console.log(amount-(dis*amount)/100)