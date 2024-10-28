import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (<div className="flex">
    <Button variant={'primary'}>click me</Button>
    <Button variant={'destructive'}>click me</Button>
    <Button variant={'outline'}>click me</Button>
    <Button variant={'secondary'}>click me</Button>
    <Button variant={'ghost'}>click me</Button>
    <Button variant={'muted'}>click me</Button>
    <Button variant={'ghost'}>click me</Button>
    <Button variant={'teritarry'}>click me</Button>
    </div>
  );
}
