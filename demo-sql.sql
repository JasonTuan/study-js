SELECT *
FROM orders
WHERE customer_id IN (
    SELECT customer_id
    FROM customers
    WHERE registration_date > '2023-01-01'
);

DELETE FROM orders;
