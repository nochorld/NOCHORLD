const BOOKS = {
    arcana: {
        title: "Arcana",

        access: {
            prologue: ["guest", "reader", "premium"],
            chapters: ["reader", "premium"],
            epilogue: ["premium"]
        },

        sections: {

            prologue: {
                title: "Prologue",
                content: "Tm8gbmV3cyB3YXMgZ29vZCBuZXdzLgogQSBuZXcgYm94IG9mIG1haWwgc3Rvb2Qgb24gdGhlIGdsYXNzIHRhYmxlIHBhY2VmdWxseS4gQnV0IG15IGV5ZXMgd2VyZSBmYXIgZnJvbSBpdCBhcyBJIHN0YXJlZCBhdCB0aGUgZmlyZXBsYWNlLiBJdCB3YXMgY29sZCBzbyB0aGUgZmlyZSB3YXMgaGVhdGluZyB0aGUgaG91c2UuIEl0IGdsb3dlZCBpbiBpdHMgdXN1YWwgd2F5IGFuZCBpdCBzZWVtZWQgdG8gYmUgZ2xhcmluZyBhdCBtZS4gQXQgbGVhc3QgaXQgd2FzIGJldHRlciB0aGFuIG1lOyBpbiBhbGwgd2F5cy4gQXQgbGVhc3QgaXQgZ2xvd3MgYXMgaXQgZG9lcyBvbiBzdW1tZXIgbmlnaHRzLiBJdCBoZWF0cyB0aGUgaG91c2UgbGlrZSBpdCBhbHdheXMgZGlkLiBJdCBkaWQgZXZlcnl0aGluZyBwZXJmZWN0bHkuCiAiQXJlbid0IHlvdSBnb2luZyB0byBvcGVuIGl0PyIgSSBoZWFyZCB0aGUgZmFtaWxpYXIgdm9pY2Ugb2YgbXkgd2lsbG93eSBzaW5nbGUgbW9tIHdobyBzZWVtZWQgbGlrZSBhIGh1bmRyZWQgcGFyZW50cyB0byBtZS4gU2hlIGhhZCBzdXBwb3J0ZWQgbWUgZmluYW5jaWFsbHkgdW50aWwgaGVyIG1vbmV5IHJhbiBvdXQgYW5kIG5vdyBzaGUgbmV2ZXIgY2Vhc2VkIHRvIHN1cHBvcnQgbWUgZW1vdGlvbmFsbHkuCiAiV2hhdCdzIHRoZSB1c2U/IiBJIHNhaWQsIHN0aWxsIGxvb2tpbmcgYXQgdGhlIGZpcmVwbGFjZS4gIkl0J3MgYWxsIHRoZSBzYW1lLiIgCiAiRG9uJ3QgeW91IGdpdmUgdXAgYW5kIG9wZW4gaXQiIHNoZSBzYWlkIGFuZCBkaXNhcHBlYXJlZCBmcm9tIHRoZSByb29tLiBZZXMuIFNoZSBoYWQgYWx3YXlzIGJlZW4gb3B0aW1pc3RpYy4gU3RpbGwgaXMuCiBJIGxvb2tlZCBkb3duIGF0IHRoZSBib3guIEl0IHdhcyBhIGJpZyBicm93biBib3ggb2YgcGFwZXIgd2l0aCBhIGxpdHRsZSB3cml0aW5nIG9uIGl0LiAKIEZyb206IEhhcHB5IFNjaG9sYXJzaGlwcwogVG86IFRvZGQgVGhvbWFzCiAnIEkgaG9wZSBJJ20gaGFwcHkgaW4gdGhlIGVuZCcsIEkgbXV0dGVyZWQgc2FyY2FzdGljYWxseSBhbmQgc2xpdCB0aGUgc2VhbC4gSSBvcGVuZWQgdGhlIGJveCBhbmQgc2F3IGEgd2hpdGUgZW52ZWxvcGUgd2l0aCB0aGUgc2FtZSBub3RlczogCkZyb206IEhhcHB5IFNjaG9sYXJzaGlwcwogVG86IFRvZGQgVGhvbWFzCiBJIHRvb2sgaXQgYW5kIGNoZWNrZWQgdGhlIGJhY2sgaWYgdGhlcmUgd2VyZSBhbnkgbm90ZXMgYnV0IGZvdW5kIG5vbmUgc28gSSBqdXN0IHRvcmUgb3BlbiB0aGUgZW52ZWxvcGUgYW5kIHRvb2sgb3V0IHRoZSBsZXR0ZXIuIEl0IHdhcyBzaG9ydCBhbmQgaXQgbG9va2VkIHByZWNpc2UuCiAgRGVhciBBcHBsaWNhbnQgVG9kZCBUaG9tYXMsIAogV2UgYXBwcmVjaWF0ZSB5b3VyIGVmZm9ydCBhbmQgdGltZSB0byBhcHBseSBmb3IgSGFwcHkgU2Nob2xhcnNoaXBzIGJ1dCB3ZSByZWdyZXQgdG8gaW5mb3JtIHlvdSB0aGF0IHlvdSB3ZXJlIG5vdCBzZWxlY3RlZCBhbW9uZyB0aGUgY2hvc2VuLiBXZSBhc2sgZm9yIHlvdXIgcGF0aWVuY2UgYW5kIHVuZGVyc3RhbmRpbmcuIFlvdSBjYW4gYXBwbHkgbmV4dCB5ZWFyIGFuZCBjYW4gYmUgcG9zc2libHkgY2hvc2VuLgogRnJvbSB0aGUgSGFwcHkgU2Nob2xhcnNoaXBzIHRlYW0sIE1hbmFnZXIuCiBJIGhhdmUgcmVhZCB0aGlzIHNvIG1hbnkgdGltZXMgdGhhdCBpdCBkcml2ZXMgbWUgY3JhenkuIEkgZXZlbiB3ZW50IGNyYXp5IHJlY2FsbGluZyB0aGVpciBzbG9nYW4uICAKIFdlIGFsd2F5cyBtYWtlIHlvdSBoYXBweQogV2VsbCwgSSdtIG5vdCBoYXBweSwgSSB0aG91Z2h0IGhvbGRpbmcgbXkgYW5nZXIgbGVzdCBpdCBjb25zdW1lcyBtZS4gSSBzcXVlZXplZCB0aGUgbGV0dGVyIGFuZCBzdG9vZCB1cCBtb3ZpbmcgdG8gdGhlIGZpcmVwbGFjZSBhbmQgY2FsbGluZyBvdXQgdG8gbXkgbW9tLiBTaGUgZGlkIG5vdCBhbnN3ZXIgaW1tZWRpYXRlbHkgYnV0IHdoZW4gc2hlIGRpZCwgc2hlIGNhbWUgb3V0IGluIGhlciBmYXZvdXJpdGUgY2xvdGggLSBhbiBhcHJvbiAtIGFuZCB5ZWxsb3cgZ2xvdmVzLgogICJXaGF0cyBpdD8iIFNoZSBhc2tlZC4gIldoYXQgZGlkIHlvdSByZWFkPyIgCiAiU2FtZSwiIEkgcmVwbGllZC4gIkknbSBoZWFkaW5nIG91dC4iIEFzIEkgY3Jvc3NlZCBvdmVyIHRvIHRoZSBzb2ZhLCBzaGUgc2FpZCwgIkFyZW4ndCB5b3UgZ29pbmcgdG8gZWF0IGJlZm9yZSB5b3UgZ28/IiAKIEkgZ3JhYmJlZCBteSBjb2F0IGJlZm9yZSBhbnN3ZXJpbmcsICJOby4iCiBXaXRoIHRoYXQsIEkgd29yZSBteSBjb2F0IGFuZCB3YWxrZWQgb3V0IG9mIHRoZSBob3VzZS4="
            },

            chapters: {
                1: "1: "TGlmZSBpcyB1bmZhaXIgYW5kIEkga25vdyBpdC4KRXZlbiB0aG91Z2ggdGhleSB3ZXJlIGEgcGFydCBvZiBteSBsaWZlIGFuZCBlZmZvcnRzLCBJIGNvdWxkIGhhcmRseSByZW1lbWJlciBvbmUuIEhhLCB0aG9zZSBlbmRsZXNzIGludGVydmlld3MhIEJ1dCB3aGF0IHdhcyB0aGUgdXNlIG9mIHJlbWVtYmVyaW5nIHRoZW0gd2hlbiB0aGV5IHlpZWxkZWQgbm90aGluZz8gCk5vdyB0aGUgb25seSB0aGluZyBvbiBteSBtaW5kIHByZXNlbnRseSB3YXMgdGhlIG9uZSBJIHdhcyBnb2luZyB0byBub3cuIEkgaGFkIHNlZW4gaXQgbGFzdCBtb250aCBhbmQgY2FsbGVkIHRoZSBudW1iZXIgYW5kIHdoYXQgSSBoZWFyZCB3YXMsCuKAmFdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IHNob3J0bHkKSSBoYWQgaGVhcmQgc2ltaWxhciB3b3JkcyBiZWZvcmU6CuKAmCBXZSBjYW4gZ2V0IGJhY2sgdG8geW91IGluIGEgZGF5IG9yIHR3bycuCkJ1dCB0aG9zZSBkYXlzIHR1cm5lZCB0byBuZXZlciBhbmQgd2hlbiBJIHdhc27igJl0IGNhbGxlZCB0aHJvdWdob3V0IHRoZSBtb250aCwgSSBnYXZlIHVwIGJ1dCBoZXJlIEkgYW0gZ2V0dGluZyBwcmVwYXJlZC4gSSBoYWQgdGhlIGRldGVybWluYXRpb24gdG8gYWNoaWV2ZSB0d28gdGhpbmdzIG9mIHdoaWNoIEkgaGFkIGFjaGlldmVkIG9uZQpHZXQgdG8gYmUgY2FsbGVkIGZvciBhbiBpbnRlcnZpZXc7IGFuZApXaW4gdGhlIGpvYi4KVW5mb3J0dW5hdGVseSwgSSBoYWQgYWx3YXlzIG9ubHkgbWFkZSBpdCB0aHJvdWdoIHRoZSBmaXJzdCBzdGFnZSBhcyB0aGUgc2Vjb25kIHN0YWdlIGRvZXNuJ3QgdXN1YWxseSBwYW4gb3V0IHdlbGwuIApOb3csIEkgd29yZSBhIGdyZWVuIGNvYXQgYWZ0ZXIgc3R5bGluZyBteSBoYWlyIGluIHRoZSBjb29sZXN0IG1hbm5lciBhbmQgd2VhcmluZyBhIGxlbW9uIGhlYWQgd2FybWVyIG9uIGl0LiBJIHJ1YmJlZCBteSBwYWxtcyBsaWdodGx5IGZvciBubyBkaXJlY3QgcmVhc29uLgrigJxJ4oCZbSBvZmYs4oCdIEkgc2hvdXRlZCB0byBteSBtb20gYXMgSSBoZWxkIHRoZSBkb29yIGtub2IuIArigJxBcmVu4oCZdCB5b3UgZ29pbmcgdG8gZWF0IGJlZm9yZSB5b3UgbGVhdmU/4oCdIE15IG1vbSBhc2tlZCwgYXBwZWFyaW5nIGluIHRoZSByb29tLiAKSSBtdXN0IGFsd2F5cyBiZSBub3QgZG9pbmcgc29tZXRoaW5nIGJlY2F1c2UgSSBvZnRlbiBoZWFyIOKAmGFyZW7igJl04oCZIGZyb20gaGVyLiAK4oCcIEF0IGxlYXN0IGEgY3VwIG9mIHRlYSzigJ0gc2hlIGNvbnRpbnVlZC4g4oCcIFlvdeKAmWxsIG5lZWQgdGhlIHN0cmVuZ3RoIHlvdSBrbm93LuKAnQrigJwgSSBhbSBub3QgQnJpdGlzaCBhbmQgeW91IGtub3cgSSBmYXN0IGV2ZXJ5IHRpbWUgSSBkbyBzb21ldGhpbmcgc2VyaW91cyzigJ0gSSByZW1pbmRlZCBoZXIuIApTaGUga25ldyBidXQgc2hlIGFsd2F5cyBwcmV0ZW5kZWQgbm90IHRvLiBTaGUganVzdCB0aG91Z2h0IEkgbmVlZGVkIHN0cmVuZ3RoIGFuZCBlYXRpbmcgd291bGQ=”",
                2: "{{CHAPTER_2}}",
                3: "{{CHAPTER_3}}",
                4: "{{CHAPTER_4}}",
                5: "{{CHAPTER_5}}",
                6: "{{CHAPTER_6}}",
                7: "{{CHAPTER_7}}",
                8: "{{CHAPTER_8}}",
                9: "{{CHAPTER_9}}",
                10: "{{CHAPTER_10}}",
                11: "{{CHAPTER_11}}",
                12: "{{CHAPTER_12}}",
                13: "{{CHAPTER_13}}",
                14: "{{CHAPTER_14}}",
                15: "{{CHAPTER_15}}",
                16: "{{CHAPTER_16}}",
                17: "{{CHAPTER_17}}",
                18: "{{CHAPTER_18}}",
                19: "{{CHAPTER_19}}",
                20: "{{CHAPTER_20}}",
                21: "{{CHAPTER_21}}",
                22: "{{CHAPTER_22}}",
                23: "{{CHAPTER_23}}",
                24: "{{CHAPTER_24}}"
            },

            epilogue: {
                title: "Epilogue",
                content: "{{EPILOGUE_CONTENT}}"
            }
        }
    }
};

