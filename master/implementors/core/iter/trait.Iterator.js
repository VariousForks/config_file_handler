(function() {var implementors = {};
implementors['libc'] = [];implementors['rustc_serialize'] = ["impl&lt;T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rustc_serialize/json/struct.Parser.html' title='rustc_serialize::json::Parser'>Parser</a>&lt;T&gt;",];implementors['cbor'] = ["impl&lt;'a, R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, D: <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='cbor/struct.DecodedItems.html' title='cbor::DecodedItems'>DecodedItems</a>&lt;'a, R, D&gt;","impl&lt;'a, R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='cbor/struct.Items.html' title='cbor::Items'>Items</a>&lt;'a, R&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()