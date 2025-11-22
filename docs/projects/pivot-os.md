---
title: PivotOS
---
# [PivotOS](https://github.com/ishan-karmakar/pivot-os)
PivotOS is a custom 64 bit operating system built in Zig and x86 Assembly.

## Features
* **Physical Memory Manager (PMM)**
    * Responsible for allocating physical pages (4096 bytes) to the kernel
    * Uses custom linked list allocator that runs in O(1) time
* **Page Table Mapper**
    * Responsible for interacting with the CPU's page tables
    * Runs in O(1) time
* **Virtual Memory Manager**
    * Responsible switching between page tables and handling a process's virtual memory
    * Uses custom buddy allocator that runs in O(log n) time
* **Kernel Heap Manager**
    * Responsible for managing the heap memory for the kernel
    * Uses Zig's standard `FixedBufferAllocator`
    * Runs in O(1) time
* **ACPI Support** - Interfaces with *uACPI* to learn about the hardware properties of the host
* **Timer Support** - Supports the *LAPIC*, *PIT*, *HPET*, and *ACPI* timer
* **PCI(e) Support** - Supports both PCIe and legacy PCI
* **UART 16550 (Serial) Driver** - Uses serial port to communicate to *QEMU*
* **Framebuffer Support** - Uses *SSFN* to draw fonts to the framebuffer
* **Multiprocessing** - Uses Limine to start other processors and run code on them
* **Multitasking** - Uses custom real-time scheduler to run processes
* **Virtual File System (in progress)** - Linux inspired virtual file system to handle multiple filesystem types
* **Disk Driver (in progress)** - Custom driver for ACHI/IDE
* **Network Driver (in progress)** - Driver for virtio-net backed by *LWIP*

## Technologies Used
* [**Limine**](https://github.com/limine-bootloader/limine)
    * Used as the bootloader of PivotOS
    * Originally used a custom bootloader, but quickly became too much effort for very little gain
* [**uACPI**](https://github.com/uACPI/uACPI)
    * Used as the API for ACPI support
    * Infeasible to build custom ACPI support because of the complexity of ASL parsing (ACPI language)
    * Called by Zig through SysV ABI compatibility layer
* [**LWIP**](https://github.com/lwip-tcpip/lwip)
    * Used as the API for network support
    * Infeasible to build custom network stack because of the complexity of network protocols
    * Called by Zig through SysV ABI compatibility layer
* [**SSFN**](https://gitlab.com/bztsrc/scalable-font2)
    * Used as the API for framebuffer support
    * Used instead of custom framebuffer implementation because of the complexity of font rendering and optimization
    * Called by Zig through SysV ABI compatibility layer
* [**Limine Zig**](https://github.com/ishan-karmakar/limine-zig)
    * Used as the API for interacting with Limine boot protocol structures
    * Written in native Zig

## Revisions