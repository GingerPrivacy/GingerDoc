# What is the main difference between GingerWallet and Wasabi?

The primary distinction between **GingerWallet** and **Wasabi Wallet** lies in their approach to coordinator selection, user responsibility, and overall design philosophy.

## **GingerWallet**
GingerWallet is designed to work seamlessly with a **default coordinator** maintained by a legal entity. This integration offers several key advantages:
- **Ease of Use**: Users can start using the wallet without needing to manually configure or select a coordinator, making it accessible for those less familiar with the technical aspects.
- **Security and Reliability**: By using a coordinator managed by a trusted entity, GingerWallet provides a secure and streamlined experience.
- **Philosophy of Accountability**: The inclusion of a default coordinator means that GingerWallet takes responsibility for ensuring functionality and reliability, reducing the burden on the user.

## **Wasabi Wallet**
Wasabi Wallet takes a different approach, prioritizing user autonomy and control:
- **No Default Coordinator**: Users are required to select their own coordinator from the internet, giving them full control over their setup.
- **User Responsibility**: This approach places the responsibility for choosing a secure and trustworthy coordinator squarely on the user, which can introduce potential risks for those less experienced.
- **Philosophy of Choice**: By avoiding a default coordinator, Wasabi emphasizes user independence and flexibility, catering to those who prefer to make their own decisions about security and privacy.

## **Technical Differences**
- **Fork and Compatibility**: GingerWallet started as a fork of Wasabi Wallet after version 2.0.7.2. Initially, there were no functional changes beyond rebranding, and GingerWallet clients remain compatible with the Ginger coordinator. However, future updates may introduce unique features that distinguish it further from Wasabi.
- **Language Support**: GingerWallet has also made significant modifications to its repository to support additional languages, reflecting a commitment to accessibility.

## **Which Wallet Should You Choose?**
The choice between GingerWallet and Wasabi depends on your preferences and level of technical expertise:
- If you value **convenience, security, and a streamlined experience**, GingerWallet may be the better option.
- If you prioritize **autonomy and control**, and are comfortable managing the risks associated with selecting your own coordinator, Wasabi may be more suitable.

For a deeper dive into GingerWallet’s features and philosophy, read the full introductory article [here](https://medium.com/@molnardavid84/ginger-wallet-first-contact-1abc8d292abd).
