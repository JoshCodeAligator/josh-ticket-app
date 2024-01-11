import Ticket from "@/app/(models)/Ticket";
import Tickeet from "@/app/models/Ticket"
import { NextResponse } from "next/server"

export async function DELETE(req, {params}) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete();

        return NextResponse.json({message: "Ticket Deleted", error}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500});
    }
}