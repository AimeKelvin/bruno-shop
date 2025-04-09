const axios = require('axios');

const createCheckout = async (req, res) => {
  const { variantId } = req.body;

  if (!variantId) {
    return res.status(400).json({ message: 'Variant ID is required' });
  }

  try {
    const response = await axios.post(
      'https://api.lemonsqueezy.com/v1/checkouts',
      {
        data: {
          type: 'checkouts',
          attributes: {
            checkout_data: {
              custom: {
                user_id: req.user._id.toString(), // Optional metadata
              },
            },
          },
          relationships: {
            store: {
              data: {
                type: 'stores',
                id: process.env.LEMON_STORE_ID, // No need to parseInt, it can be a string
              },
            },
            variant: {
              data: {
                type: 'variants',
                id: variantId, // No need to parseInt, it can be a string
              },
            },
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.LEMON_API_KEY}`,
          'Content-Type': 'application/vnd.api+json',
          Accept: 'application/vnd.api+json',
        },
      }
    );

    const checkoutUrl = response.data.data.attributes.url;
    res.status(200).json({ checkoutUrl });
  } catch (error) {
    console.error('Lemon Squeezy Error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to create Lemon Squeezy checkout' });
  }
};

module.exports = { createCheckout };